import { Bell, Search } from "lucide-react";
function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input placeholder="Tìm kiếm..." className="w-full rounded-md border border-input bg-card pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="flex items-center gap-3">
        <button className="relative rounded-full p-2 bg-card border border-border">
          <Bell className="size-4" />
          <span className="absolute -top-1 -right-1 size-4 rounded-full bg-destructive text-[10px] text-destructive-foreground flex items-center justify-center">3</span>
        </button>
        <div className="size-9 rounded-full bg-accent flex items-center justify-center text-sm font-medium text-accent-foreground">NA</div>
      </div>
    </div>
  );
}

export default TopBar