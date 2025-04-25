import React from "react";
import Agent from "@/components/Agent";
// import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  // const user = await getCurrentUser();

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent
        userName="You"
        userId="user1"
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
