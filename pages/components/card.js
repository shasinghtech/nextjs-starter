import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, body, url }) => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">{title}</h3>
        <p className="card-text mb-auto">{body}</p>
        <Link href={url} className="stretched-link">Continue reading</Link>
      </div>
      <div className="col-auto d-none d-lg-block">
        <Image src="https://images.unsplash.com/photo-1681647627150-f5cb38f3a626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width="200" height="250" alt="image"/>
        
      </div>
    </div>
  );
};

export default Card;
