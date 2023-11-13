import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
      <>
      <div className='text-violet-500 text-2xl'>MY AI</div>
      <Link href="/sign-in">
        <Button>
          Login
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
          Register
        </Button>
      </Link>
      </>
    )
  }
  