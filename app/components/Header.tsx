import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          aria-label="Home"
        >
          blog.
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/articles"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            New Post
          </Link>
          <Link
            href="/rss"
            className="text-sm text-muted hover:text-foreground"
            aria-label="RSS Feed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}