import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Здесь должна быть логика проверки email и password
  if (email === 'test@example.com' && password === 'password') {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' });
}
