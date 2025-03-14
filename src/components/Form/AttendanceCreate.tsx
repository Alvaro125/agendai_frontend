"use client";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "primereact/button";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";

export default function AttendanceCreateForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form
      action={formAction}
      className="py-2 px-4 rounded-sm flex flex-col"
    >
      <div className="card flex flex-col">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <InputText id="nome" aria-describedby="username-help" name="nome" />
          <small id="username-help">
            Enter your username to reset your password.
          </small>
        </div>
        <div className="card">
          <FileUpload
            name="demo[]"
            url={"/api/upload"}
            multiple
            accept="image/*"
            maxFileSize={1000000}
            emptyTemplate={
              <p className="m-0">Drag and drop files to here to upload.</p>
            }
          />
        </div>
      </div>
    </form>
  );
}
