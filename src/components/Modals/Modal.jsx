import { Dialog } from '@/components/ui/dialog';

// eslint-disable-next-line react/prop-types
export function Modal({ open, setOpen, children }) {
  //   const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
    </Dialog>
  );
}
