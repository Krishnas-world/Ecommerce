import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBag } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export default function AdminSidebar({ open, setOpen }) {  // Destructure the props
  const navigate = useNavigate();

  const adminSideBar = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/admin/dashboard',
      icons: <LayoutDashboard />
    },
    {
      id: 'products',
      label: 'Products',
      path: '/admin/products',
      icons: <ShoppingBag />
    },
    {
      id: 'orders',
      label: 'Orders',
      path: '/admin/orders',
      icons: <BadgeCheck />
    }
  ];

  function MenuItems() {
    return (
      <nav className="mt-8 flex flex-col gap-2">
        {adminSideBar.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => {
              navigate(menuItem.path)
              setOpen ? () => setOpen(false) : null;
            }}
            className="flex text-xl items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted active:text-foreground"
          >
            {menuItem.icons}
            <span>{menuItem.label}</span>
          </div>
        ))}
      </nav>
    );
  }

  return (
    <div>
      <Fragment>
        {/* Mobile Sidebar using Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col h-full">
              <SheetHeader className="border-b">
                <SheetTitle className="flex gap-2 mt-5 mb-5">
                  <ChartNoAxesCombined size={30} />
                  <h1 className="text-2xl font-bold">Admin Panel</h1>
                </SheetTitle>
              </SheetHeader>
              <MenuItems />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:block">
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/admin/dashboard")}
          >
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-bold">Admin Panel</h1>
          </div>
          <MenuItems />
        </aside>
      </Fragment>
    </div>
  );
}
