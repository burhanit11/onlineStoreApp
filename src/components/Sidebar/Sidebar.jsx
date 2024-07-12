import Link from "next/link";

import * as React from "react";

export default function PermanentDrawerLeft() {
  return (
    <div className="bg-slate-800 flex-col ">
      <Link href="#">Logo</Link>
      <Link href="#">Dashboard</Link>
      <Link href="#">Catalogue</Link>
      <Link href="#">Customers</Link>
      <Link href="#">Markets</Link>
      <Link href="#">FArmers </Link>
      <Link href="#">Orders</Link>
      <Link href="#">Staff</Link>
      <Link href="#">Settings</Link>
      <Link href="#">Online Store</Link>
    </div>
  );
}
