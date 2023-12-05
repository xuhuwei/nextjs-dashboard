import Button from "@/components/Button";
import Test from "@/components/Test";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return (
    <div>
      <Test is={true} />
      <Button />
    </div>
  );
}
