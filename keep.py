from git_filter_repo import Commit

KEEP_NAME = b"Simagine/Sadek-Amine"
KEEP_EMAIL = b"cscience670@gmail.com"

def commit_callback(commit, metadata):
    if commit.author_name != KEEP_NAME or commit.author_email != KEEP_EMAIL:
        commit.skip()