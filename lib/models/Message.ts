import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
    clerkUserId: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
}

const MessageSchema: Schema = new Schema({
    clerkUserId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Since Next.js API routes are serverless, we check if the model exists to prevent re-compilation
export default mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema);
