import { NAV_LINKS, SITE } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";

const DETAILS = [
  { label: "Location", value: SITE.addressLine },
  { label: "Phone", value: SITE.phoneDisplay, href: SITE.phoneHref },
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Hours", value: `${SITE.hoursLabel}, ${SITE.hoursValue}` },
  { label: "Instagram", value: SITE.instagramHandle, href: SITE.instagramUrl },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-[100rem] flex-col gap-10 px-4 py-16 md:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Logo className="h-8" />
            <p className="mt-3 max-w-xs text-sm text-ink">
              Digital marketing agency based in {SITE.city}, building growth for ambitious brands.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-5">
          {DETAILS.map((detail) => (
            <div key={detail.label}>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="mt-1.5 block text-sm text-ink transition-colors hover:text-primary"
                  {...(detail.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-1.5 text-sm text-ink">{detail.value}</p>
              )}
            </div>
          ))}
        </div>

        <p className="border-t border-line pt-8 text-sm text-ink">
          © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
