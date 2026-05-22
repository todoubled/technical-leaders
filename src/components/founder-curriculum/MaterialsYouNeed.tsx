import { useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { trackClick } from '@/utils/posthog';
import { SourceScreenshots } from './SourceScreenshots';

type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  isbn: string;
  amazonUrl: string;
  accent: string;
  spineColor: string;
};

const BOOKS: Book[] = [
  {
    id: 'mom-test',
    title: 'The Mom Test',
    subtitle: 'How to talk to customers when everyone is lying to you',
    author: 'Rob Fitzpatrick',
    isbn: '1492180742',
    amazonUrl: 'https://www.amazon.com/dp/1492180742',
    accent: 'from-rose-500/20 to-rose-900/5',
    spineColor: 'bg-rose-700',
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    subtitle: 'Notes on Startups, or How to Build the Future',
    author: 'Peter Thiel with Blake Masters',
    isbn: '0804139296',
    amazonUrl: 'https://www.amazon.com/dp/0804139296',
    accent: 'from-amber-500/20 to-amber-900/5',
    spineColor: 'bg-amber-700',
  },
  {
    id: 'socratic-selling',
    title: 'Socratic Selling',
    subtitle: 'How to Ask the Questions That Get the Sale',
    author: 'Kevin Daley',
    isbn: '0786304553',
    amazonUrl: 'https://www.amazon.com/dp/0786304553',
    accent: 'from-sky-500/20 to-sky-900/5',
    spineColor: 'bg-sky-700',
  },
];

function BookCover({ book }: { book: Book }) {
  const [imageFailed, setImageFailed] = useState(false);
  const coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`;

  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md bg-slate-800 shadow-lg shadow-black/40 ring-1 ring-white/5">
      {!imageFailed ? (
        <img
          src={coverUrl}
          alt={`Cover of ${book.title} by ${book.author}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className={`relative flex h-full w-full flex-col justify-between p-3 ${book.spineColor}`}>
          <div className="absolute inset-y-0 left-0 w-1.5 bg-black/30" aria-hidden="true" />
          <div className="pl-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              {book.author.split(' ').slice(-1)[0]}
            </p>
          </div>
          <div className="pl-2 pb-1">
            <p className="text-lg font-bold leading-tight text-white drop-shadow-sm">
              {book.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function MaterialsYouNeed() {
  return (
    <section
      aria-labelledby="materials-title"
      className="mb-10 md:mb-12 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 md:p-6"
    >
      <div className="flex items-center gap-2 mb-1">
        <BookOpen className="w-4 h-4 text-slate-400" />
        <h2
          id="materials-title"
          className="text-lg md:text-xl font-bold text-white"
        >
          Materials you need
        </h2>
      </div>
      <p className="text-sm text-slate-400 mb-5">
        Three short books. Pick them up before you start, or grab each as you reach the phase that draws on it.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {BOOKS.map((book) => (
          <li key={book.id}>
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('founder_curriculum_materials_amazon', { book: book.id })}
              className={`group block rounded-xl border border-slate-700/60 bg-gradient-to-br ${book.accent} p-4 transition-all hover:border-slate-500 hover:bg-slate-800/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
            >
              <div className="flex gap-4 sm:flex-col sm:gap-3">
                <div className="w-20 shrink-0 sm:w-full">
                  <BookCover book={book} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white leading-tight">
                    {book.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400 line-clamp-2">
                    {book.subtitle}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500">
                    by {book.author}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-400 group-hover:text-emerald-300">
                    Get on Amazon
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <SourceScreenshots />
    </section>
  );
}
