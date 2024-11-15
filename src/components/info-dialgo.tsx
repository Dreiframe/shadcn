import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
 
export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Info</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] items-center">
        <DialogHeader>
          <DialogTitle>PointCloud</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <DialogFooter>
            Footer
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}