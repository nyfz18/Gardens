import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
  } from "react-router-dom";
  import { updateContact } from "../contacts";

  export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();


  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Names:</span>
        <input
          placeholder="To:"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="From:"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Bouquet:</span>
        <input
          type="text"
          name="twitter"
          placeholder="A's Birthday Bouquet"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Message:</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button"
            onClick={() => {
            navigate(-1);
            }}
        >Cancel</button>
      </p>
    </Form>
  );
}