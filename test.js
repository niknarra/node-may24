const ARTICLES = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

let sortByUpvotes = ARTICLES.sort(function (p1, p2) {
  return p2.upvotes - p1.upvotes;
});

function sortByVotes(articles) {
  articles.sort((p1, p2) => {
    p2.upvotes - p1.upvotes;
  });
}

let sortByDate = ARTICLES.sort(function (p1, p2) {
  let date1 = new Date(p1.date).getTime();
  let date2 = new Date(p2.date).getTime();

  return date2 - date1;
});

console.log(sortByVotes(ARTICLES));
