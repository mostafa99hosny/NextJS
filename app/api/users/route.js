import { NextResponse } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const user = await User.create(data);
  return NextResponse.json(user, { status: 201 });
}
