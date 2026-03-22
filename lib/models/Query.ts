import mongoose, { Schema, Document } from 'mongoose';

export interface IQuery extends Document {
    clerkUserId: string;
    name: string;
    email: string;
    projectName: string;
    query: string;
    createdAt: Date;
}

const QuerySchema: Schema = new Schema({
    clerkUserId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    projectName: { type: String, required: true },
    query: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Since Next.js API routes are serverless, we check if the model exists to prevent re-compilation
export default mongoose.models.Query || mongoose.model<IQuery>('Query', QuerySchema);
