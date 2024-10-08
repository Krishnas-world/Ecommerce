import ProductImageUpload from "@/components/admin/image-upload";
import CommonForm from "@/components/common/forms";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useState } from "react";

export default function AdminProducts() {
  const initialState = {
    image: null,
    title: "",
    desc: "",
    category: "",
    price: "",
    stock: "",
    salePrice: "",
  };
  const [openCreateProducts, setOpenCreateProducts] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  function onSubmit() { }
  function isValid() {
    return Object.keys(formData).map((key) => formData[key] !== "").every((item) => item)
  }
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => {
            setOpenCreateProducts(true);
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet
          open={openCreateProducts}
          onOpenChange={() => {
            setOpenCreateProducts(false);
          }}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
            <div className="py-6">
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                buttonText="Add"
                onSubmit={onSubmit}
                formcontrols={addProductFormElements}
                isBtnDisabled={isValid}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
}
