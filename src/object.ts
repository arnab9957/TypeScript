// Partial
type Book = {
  title: string;
  author: string;
  year: number;
  pages?: number;
};

// To make all input optional
const book: Partial<Book> = {
  // title: 'The Great Gatsby',
  // author: 'F. Scott Fitzgerald',
  // year: 1925,
  // There are no error
};

// To make all input required
const book2: Required<Book> = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  pages: 180, // if we comment this out then a error will show
};

// To make all input readonly
const book3: Readonly<Book> = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  pages: 180, // if we comment this out then a error will show
};

// To pick particular properties
const book4: Pick<Book, "title" | "author"> = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
};

// To omit particular properties
const book5: Omit<Book, "pages"> = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
