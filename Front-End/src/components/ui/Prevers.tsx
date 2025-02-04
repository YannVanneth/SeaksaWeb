"use client";

import { Pagination } from "flowbite-react";
import React from "react";
import { useState } from "react";

export function Prevers() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center dark:bg-primaryDark pb-10">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
