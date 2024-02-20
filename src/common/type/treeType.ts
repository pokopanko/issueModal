export type FileInfo = {
  link: string;
  name: string;
};

export type Node ={
    name: string;
    children?: Node[];
}