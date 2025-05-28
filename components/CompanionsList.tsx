import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn, getSubjectColor } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface CompanionsListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ companions, classNames }: CompanionsListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className='text-3xl font-bold'>Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-2/3 text-lg'>Lessons</TableHead>
            <TableHead className='text-lg'>Subject</TableHead>
            <TableHead className='text-right text-lg'>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ $id, subject, name, topic, duration }) => (
            <TableRow key={$id}>
              <TableCell>
                <Link href={`/companions/${$id}`}>
                  <div className='flex items-center gap-2'>
                    <div
                      className='flex size-[72px] items-center justify-center rounded-lg max-md:hidden'
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons//${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='text-2xl font-bold'>{name}</p>
                      <p className='text-lg'>{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>

              <TableCell>
                <div className='subject-badge w-fit max-md:hidden'>
                  {subject}
                </div>
                <div
                  className='flex w-fit items-center justify-center rounded-lg p-2 md:hidden'
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className='flex w-full items-center justify-end gap-2'>
                  <p className='text-2xl'>
                    {duration} <span className='max-md:hidden'>mins</span>
                  </p>
                  <Image
                    src='/icons/clock.svg'
                    alt='minutes'
                    width={14}
                    height={14}
                    className='md:hidden'
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
