import Link from 'next/link';

function Button() {
  return (
    <div className="py-2 hover-ing">
        <Link href="/">
            <a target="_blank">
            🔗 <span>Link</span>
            </a>
        </Link>
    </div>
  )
}

export default Button;
