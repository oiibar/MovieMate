"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";

const MoviesSearchForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/movies/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button text="Search" variant="glowing" />
    </form>
  );
};

export default MoviesSearchForm;
