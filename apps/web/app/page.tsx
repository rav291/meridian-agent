"use client"

import { add } from "@workspace/math/add"
import { Button } from "@workspace/ui/components/button"
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.addUser);

  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello Web</h1>
            <UserButton />

            <div className="flex gap-2">
              <Button onClick={() => addUser()}>Add User</Button>
              <span>Sum: {add(1, 2)}</span>
              <span>{JSON.stringify(users)}</span>
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  )
}
