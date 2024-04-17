import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: info } = await supabase.from("info").select();

  return <pre>{JSON.stringify(info, null, 2)}</pre>;
}
