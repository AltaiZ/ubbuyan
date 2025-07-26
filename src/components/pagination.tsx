import {   Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, } from "./ui/pagination";


interface PaginationPartProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationPart({
  currentPage,
  totalPages,
}: PaginationPartProps) {
  const visiblePages = 5; 

  const currentPageClamped = Math.max(1, Math.min(currentPage, totalPages));

  let startPage = Math.max(
    1,
    currentPageClamped - Math.floor(visiblePages / 2)
  );
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  // Adjust startPage if endPage exceeds totalPages
  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  // Ensure startPage and endPage are adjusted correctly if totalPages is less than visiblePages
  if (totalPages <= visiblePages) {
    startPage = 1;
    endPage = totalPages;
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationPrevious
            href={
              currentPageClamped > 1
                ? `?page=${currentPageClamped - 1}`
                : undefined
            }
            className={currentPageClamped === 1 ? "disabled" : ""}
          />
        </PaginationItem>

        {/* Page numbers */}
        {startPage > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={`?page=1`}>1</PaginationLink>
            </PaginationItem>
            {startPage > 2 && <PaginationEllipsis />}
          </>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}`}
              isActive={currentPageClamped === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink href={`?page=${totalPages}`}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            href={
              currentPageClamped < totalPages
                ? `?page=${currentPageClamped + 1}`
                : undefined
            }
            className={currentPageClamped === totalPages ? "disabled" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
