import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
