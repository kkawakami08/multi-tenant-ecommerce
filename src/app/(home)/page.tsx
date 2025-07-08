import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-5 p-10 w-1/2 ">
      <div>
        <Button variant={"elevated"}>I am a btn</Button>
      </div>
      <div>
        <Input placeholder="I am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea value={"I am a textarea"} readOnly />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default Homepage;
