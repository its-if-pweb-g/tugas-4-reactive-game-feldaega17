// Definisikan tipe untuk pertanyaan
export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

// Data pertanyaan
export const questions: Question[] = [
  {
    question: "Siapa presiden pertama Indonesia?",
    options: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"],
    answer: "Soekarno",
    explanation: "Soekarno adalah presiden pertama Indonesia yang menjabat dari 1945 hingga 1967."
  },
  {
    question: "Berapa jumlah pulau di Indonesia?",
    options: ["17.000", "10.000", "20.000", "15.000"],
    answer: "17.000",
    explanation: "Menurut data resmi, Indonesia memiliki sekitar 17.000 pulau."
  },
  {
    question: "Apa ibu kota Jepang?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hokkaido"],
    answer: "Tokyo",
    explanation: "Tokyo adalah ibu kota Jepang untuk masa ini."
  },
  {
    question: "Apa mata uang Uni Eropa?",
    options: ["Euro", "Pound", "Dollar", "Yen"],
    answer: "Euro",
    explanation: "Mata Uang Uni Eropa adalah Euro."
  },
  {
    question: "Apa nama planet terbesar di tata surya?",
    options: ["Bumi", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter",
    explanation: "Hingga saat ini memang Planet Jupiter yang memiliki volume paling besar diantara planet lainnya."
  },
  {
    question: "Berapa sisi yang dimiliki oleh segi delapan?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "Jika anda menjawab selain 8, berarti anda harus kembali ke sd."
  },
  {
    question: "Siapa penemu listrik?",
    options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Thomas Edison"],
    answer: "Thomas Edison",
    explanation: "Tokoh penemu arus listrik adalah Thomas Alva Edison, di mana dirinya adalah seorang pengusaha yang hidup pada abad ke-19 dan awal abad ke-20."
  },
  {
    question: "Apa bahasa pemrograman yang digunakan untuk pengembangan web?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    explanation: "Yang Programmer sudah tau lah."
  },
  {
    question: "Siapa yang menulis 'Harry Potter'?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Agatha Christie"],
    answer: "J.K. Rowling",
    explanation: "Bisa dicari di google yak kalo ga percaya."
  },
  {
    question: "Di mana Menara Eiffel berada?",
    options: ["London", "Berlin", "Paris", "Roma"],
    answer: "Paris",
    explanation: "Semua orang juga tahu kalo itu di Paris. "
  }
];
