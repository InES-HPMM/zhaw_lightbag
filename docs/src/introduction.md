
# ZHAW Lightbag Workshop

Der ZHAW Lightbag Workshop ist ein kreatives Projekt, das es ermöglicht, mit Licht und Programmierung zu experimentieren.

## Hardware

Die Hardware besteht aus einem micro:bit und einer Erweiterungskarte mit einem LED Ring.


## Dokumentation

Um diese Dokumentation anzupassen und lokal zu testen, befolge diese Schritte:

 1. Install rust
    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
 2. Install mdbook
    ```
    cargo install mdbook
    ```
 3. Install extensions
    ```
    cargo install mdbook-admonish
    ```
 4. Build and serve the book from the docs directory
    ```
    mdbook serve
    ```