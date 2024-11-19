import { Copyright } from "lucide-react";

function ShoppingHeader() {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        All Rights reserved 
         {/* {Copyright} */}
      </div>
    </footer>
  );
}

export default ShoppingHeader;
