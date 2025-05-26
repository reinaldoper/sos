export interface Location{
  id: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
}

export interface TaskItemProps {
  task: Location;
  onRemove: (id: string) => void;
}


export interface Contact {
  recordID: string;
  displayName: string | null;
  phoneNumbers: {label: string; number: string}[];
}
