package com.example.kossweb_backend.dto;

import jakarta.validation.constraints.NotBlank;

public record TodoCreateReq(@NotBlank String title) {}
