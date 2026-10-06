import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            email,
            company,
            requirement,
            message,
        } = body;

        if (!name || !phone || !email || !requirement || !message) {
            return Response.json(
                {
                    success: false,
                    message: "Please fill all required fields.",
                },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "KMP Industries <onboarding@resend.dev>",
            to: ["arunthangaiahb@gmail.com"],
            replyTo: email,
            subject: `New Enquiry from ${name}`,

            html: `
                <h2>New KMP Industries Enquiry</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "Not provided"}</p>
                <p><strong>Requirement:</strong> ${requirement}</p>

                <h3>Message</h3>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error(error);

            return Response.json(
                {
                    success: false,
                    message: "Unable to send enquiry.",
                },
                { status: 500 }
            );
        }

        return Response.json({
            success: true,
            message: "Enquiry sent successfully.",
            data,
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}