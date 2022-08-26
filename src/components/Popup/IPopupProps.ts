export interface IPopupProps {
  text: Record<string, string>,
  isOpen: boolean,
  onClose: () => void,
}
