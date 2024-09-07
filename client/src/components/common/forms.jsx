import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CommonForm({ formcontrols, formData, setFormData, onSubmit, buttonText }) {
  const renderInputbyComp = (getItem) => {
    let element = null;
    const value = formData[getItem.name] || ''

    switch (getItem.componentType) {
      case "input":
        element = (
          <Input
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.name}
            type={getItem.type}
            value={value}
            onchange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
        break;

      case "select":
        element = (
          <Select onValueChange={(value)=>setFormData({
            ...formData,
            [getItem.name]: value
          })} name={getItem.name} id={getItem.name} value={value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getItem.options && getItem.options.length > 0
                ? getItem.options.map((optionItem) => (
                  <SelectItem
                    key={optionItem.id}
                    value={optionItem.value}
                  >
                    {optionItem.label}
                  </SelectItem>
                ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.id}
            value={value}
            onchange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
        break;

      default:
        element = (
          <Input
            name={getItem.name}
            placeholder={getItem.placeholder}
            id={getItem.name}
            type={getItem.type}
            value={value}
            onchange={e => setFormData({
              ...formData,
              [getItem.name]: e.target.value
            })}
          />
        );
    }

    return element;
  };

  return (

    <form action="" onSubmit={onsubmit}>
      <div className="flex flex-col gap-3">
        {formcontrols.map((controlItem) => (
          <div key={controlItem.key} className="w-full gap-1.5">
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputbyComp(controlItem)}
          </div>
        ))}
      </div>
      <Button className='mt-2 w-full' type='submit'>{buttonText || "Submit"}</Button>
    </form>

  );
}
