import Link from "next/link";
import '@/styles/expensecss/expense.css'

export default function DasboardFooter() {
  return (
    <div className="footer">
      <p className="foot">
        © 2026 <Link href="#">Fin Pocket</Link>. All financial data is securely
        encrypted.
      </p>
    </div>
  );
}
