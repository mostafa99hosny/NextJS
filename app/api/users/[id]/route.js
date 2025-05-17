import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export async function GET({ params }) {
  await dbConnect();
  const { id } = params;
  const user = await User.findById(id);
  return NextResponse.json(user);
}
