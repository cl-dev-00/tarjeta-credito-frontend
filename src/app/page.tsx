import { Sidebar } from "app/components/Home/Sidebar";
import { ShoppingList } from "app/components/Home/ShoppingList";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-white">
        <ShoppingList />
       <Sidebar />
    </main>
  );
}
