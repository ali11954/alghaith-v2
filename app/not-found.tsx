import Link from "next/link";

export default function RootNotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="kicker">404</span>
        <h1>الصفحة غير موجودة | Page not found</h1>
        <p>
          الرابط الذي طلبته غير صحيح أو تم نقله.
          <br />
          The page you requested does not exist or has moved.
        </p>
        <div className="not-found-actions">
          <Link className="btn btn-primary" href="/ar">
            الرئيسية | Home
          </Link>
          <Link className="btn btn-ghost" href="/en">
            English
          </Link>
        </div>
      </div>
    </main>
  );
}