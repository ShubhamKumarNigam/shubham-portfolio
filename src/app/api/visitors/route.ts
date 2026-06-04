import { NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const DATA_FILE = join(process.cwd(), "visitor-count.json");

interface VisitorData {
  count: number;
  ips: string[];
}

function getData(): VisitorData {
  if (existsSync(DATA_FILE)) {
    try {
      return JSON.parse(readFileSync(DATA_FILE, "utf-8"));
    } catch {
      return { count: 0, ips: [] };
    }
  }
  return { count: 0, ips: [] };
}

function saveData(data: VisitorData) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = getData();
  // In a real app, you'd check IP to avoid double counting
  // For demo purposes, we increment on every unique page load
  data.count += 1;
  saveData(data);
  return NextResponse.json({ count: data.count });
}
