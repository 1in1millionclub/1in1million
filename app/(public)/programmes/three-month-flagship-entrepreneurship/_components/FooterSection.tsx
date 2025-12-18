export function FooterSection() {
  return (
    <footer className="bg-card border-border w-full border-t">
      <div className="mx-auto max-w-[1060px] px-4 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-foreground font-monument text-xl font-semibold">
              Euntraprunes
            </span>
            <p className="text-muted-foreground font-mont max-w-[250px] text-sm">
              Building a new generation of entrepreneurs who win with
              discipline, ethics, and execution.
            </p>

            {/* Social Links */}
            <div className="mt-2 flex gap-4">
              <a
                href="#"
                className="bg-muted hover:bg-muted-foreground/20 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-muted-foreground/20 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-muted hover:bg-muted-foreground/20 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-mont text-sm font-semibold">
                Programme
              </span>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Curriculum
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-mont text-sm font-semibold">
                Community
              </span>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground font-mont text-sm font-semibold">
                Legal
              </span>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground font-mont text-sm transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-border mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground font-mont text-sm">
            © 2024 Euntraprunes Community. All rights reserved.
          </p>
          <p className="text-muted-foreground font-mont text-sm">
            Made with ❤️ in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
