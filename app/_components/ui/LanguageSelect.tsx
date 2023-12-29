import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LanguageSelect() {
  return (
    <Select defaultValue="english">
      <SelectTrigger className="w-16">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">EN</SelectItem>
        <SelectItem value="japanese">JP</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
