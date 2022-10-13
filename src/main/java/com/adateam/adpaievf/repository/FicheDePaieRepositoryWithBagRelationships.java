package com.adateam.adpaievf.repository;

import com.adateam.adpaievf.domain.FicheDePaie;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface FicheDePaieRepositoryWithBagRelationships {
    Optional<FicheDePaie> fetchBagRelationships(Optional<FicheDePaie> ficheDePaie);

    List<FicheDePaie> fetchBagRelationships(List<FicheDePaie> ficheDePaies);

    Page<FicheDePaie> fetchBagRelationships(Page<FicheDePaie> ficheDePaies);
}
