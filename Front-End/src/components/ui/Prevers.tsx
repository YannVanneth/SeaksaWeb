"use client";

import { Pagination } from "flowbite-react";
import React from "react";
import { useState } from "react";

export function Prevers({ perPageItem, totalItems, setCurrentPage }: { perPageItem: number, totalItems: number, setCurrentPage: (page: number) => void }) {
  const [currentPage, setLocalPage] = useState(1);

  const onPageChange = (page: number) => {
    setLocalPage(page);
    setCurrentPage(page); // Update the parent component
  };

  const totalPages = Math.ceil(totalItems / perPageItem);

  return (
    <div className="flex overflow-x-auto sm:justify-center dark:bg-primaryDark pb-10">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
