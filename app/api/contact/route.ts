import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <contact@abdulazizdev.in>",
      to: ["abdulaziz742141@gmail.com"],
      replyTo: email,
      subject: subject,
      text: `
            Name: ${name} 
            Email: ${email} 
            Subject: ${subject}
            
            Message: 
            ${message}
            `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({success:true,data},{status:200});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
