import React from "react";

const Card = ({userName="Default User", person, number}) => {
  return (
    <>
      <figure className="bg-slate-100 rounded-xl p-8">
        <img
          className="w-48 h-48 rounded-full mx-aut"
          src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ab illum, unde ipsam quasi culpa sapiente provident accusamus perspiciatis magni. Eos quam temporibus placeat iusto iure rem ea unde, fuga fugit beatae ipsa quaerat hic exercitationem? Voluptate, aliquam accusantium laboriosam, deserunt provident magnam fugiat tempore velit cumque rem error natus!
            </p>
          </blockquote>
          <figcaption>
            <div>{userName}</div>
<div> {person.name}</div>
<div> {person.age}</div>
<div> {person.designation}</div>
<div> {number.map(
    (item)=>{
        return <>{item} &nbsp;</>
    }
    )
}</div>
            {/* <div>{userName || "Deafult Value"}</div> */}


            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;
