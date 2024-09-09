import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { Fragment, useState } from "react";

export default function AdminProducts() {
  const [openCreateProducts, setOpenCreateProducts] = useState(false)
  return (
    <Fragment>
      <div className='mb-5 w-full flex justify-end'>
        <Button onClick={() => { setOpenCreateProducts(true) }}>Add Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet open={openCreateProducts} onOpenChange={() => {
          setOpenCreateProducts(false)
        }}>

        </Sheet>
      </div>
    </Fragment>
  )
}
