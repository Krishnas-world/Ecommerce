import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";


export default function ShoppingLayout() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* Common header of shopping */}
      <ShoppingHeader/>
      <main className='flex flex-col w-full'>
        <Outlet/>
      </main>
    </div>
  )
}
